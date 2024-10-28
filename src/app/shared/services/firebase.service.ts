import { inject, Injectable } from "@angular/core";
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentReference,
  Firestore,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "@angular/fire/firestore";
import { User } from 'firebase/auth';
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  user$: Observable<User | null> = of(null);
  private collectionName = 'ahbenfolio';
  private firestore: Firestore;
  private collectionRef!: CollectionReference;
  private collectionDocs$!: Observable<any[]>;
  public documentName?: string;

  constructor() {
    // this.user$ = this.auth.authState as Observable<User | null>;
    this.firestore = inject(Firestore);
    this.setCollectionRef();
    this.setCollectionDataObservable();
  }

  // login(email: string, password: string) {
  //   return this.auth.signInWithEmailAndPassword(email, password);
  // }

  // signup(email: string, password: string) {
  //   return this.auth.createUserWithEmailAndPassword(email, password);
  // }

  // logout() {
  //   return this.auth.signOut();
  // }

  private setCollectionRef() { 
    this.collectionRef = collection(this.firestore, this.collectionName)
  }

  private setCollectionDataObservable() {
    this.collectionDocs$ = collectionData(this.collectionRef) as Observable<any[]>;
  }

  private getDocRef(docId: string): DocumentReference { 
    return  doc(this.firestore, this.collectionName, docId);
  }

  public getServerTimestamp() { 
    return serverTimestamp();
  }

  public setDocumentName(name: string) { 
    this.documentName = name;
  }

  // add a document with random document id
  public addDocument(data: any) {
    addDoc(this.collectionRef, data).then((docRef: DocumentReference) => {
      console.log(docRef.path);
    });
  }

  // use {merge: true} to merge with existing document
  public setDocument(docId: string, data: any, merge?: boolean) {
    setDoc(this.getDocRef(docId), data, { merge });
  }

  // update some fields of a document without overwriting the entire document
  public updateDocument(docId: string, data: any) { 
    updateDoc(this.getDocRef(docId), data);
  }

  // Deleting a document does not delete its subcollections!
  public deleteDocument(docId: string) { 
    deleteDoc(this.getDocRef(docId))
  }
}
