import {Component, OnInit} from '@angular/core';
import {AccountService} from '../services/account.service';
import {TokenStorageService} from '../services/token-storage.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-moderator-page',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  content: string;
  stripeAccountId: any;

  constructor(private userService: UserService, private accountService: AccountService,
              private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.accountService.createStripeAccount(this.tokenStorage.getUser())
      .subscribe(userData => {
        console.log(userData);
        this.stripeAccountId = userData;
        this.userService.setUserAccountConnector(this.stripeAccountId)
          .subscribe();
      });
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
