import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Policy } from 'src/app/model/policy';
import { PolicyService } from 'src/app/service/policy.service';

@Component({
  selector: 'app-trashed-policy',
  templateUrl: './trashed-policy.component.html',
  styleUrls: ['./trashed-policy.component.scss']
})
export class TrashedPolicyComponent implements OnInit {
  public notes: Policy[] = [];
  public mytoken= '';
  constructor(private noteService: PolicyService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() { 
    this.mytoken=localStorage.getItem('token');
    this.getNotes();
  }
  getNotes() {
    console.log('token', this.mytoken);
    this.noteService.retrievePolicy().subscribe(newNote => {
      this.notes = newNote;
    }
    )
  }
  deleteNoteForever(note) {
    console.log(note.policyId);
    this.noteService.deletePolicy(note.policyId).subscribe(response => {
      this.snackBar.open("deleted Note forever", "OK", { duration: 2000 });
    }), error => {
      this.snackBar.open("error", "error to retrieve notes", { duration: 2000 });
    }
  }
}
