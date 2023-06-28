import {Component, OnInit} from '@angular/core';
import {CardService} from './card.service';
import {environment} from '../../environments/environment';
import {StripeService} from '../services/stripe.service';
import {TokenStorageService} from '../services/token-storage.service';

declare var Stripe: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private stripe: any = null;
  private card: any = null;
  private elements: any = null;
  public cardError: string = null;
  public chargeError: any = null;
  public charge: any = null;
  customerAccount: any;

  constructor(
    private readonly stripeService: StripeService,
    private readonly cardService: CardService,
    private tokenServiceRepository: TokenStorageService
  ) {
  }

  public ngOnInit() {
    this.stripeService.initializeStripe().subscribe(() => {
      this.stripe = Stripe(environment.stripePublicKey);
      this.elements = this.stripe.elements();
      this.card = this.elements.create('card');
      this.card.mount('#card-element');
      this.card.addEventListener('change',
        event => event.error ? this.cardError = event.error.message : null);
    });
  }

  public createCharge() {
    this.charge = null;
    this.chargeError = null;
    this.stripe.createToken(this.card).then(cardResult => {
      if (cardResult.error) {
        this.cardError = cardResult.error.message;
      } else {
        this.cardService.addCard(this.tokenServiceRepository.getUser(), cardResult.token).subscribe(customer => {
            this.customerAccount = customer;
          },
          error => this.cardError = error);
        this.stripe.createToken(this.card).then(chargeResults => {
          if (chargeResults.error) {
            this.cardError = chargeResults.error.message;
          } else {
            this.cardService.createCharge(chargeResults.token, this.customerAccount, 876, 'usd', 'This is charge for service', 1)
              .subscribe(
                response => this.charge = response,
                error => this.chargeError = error
              );
          }
        });
      }
    });
  }
}
