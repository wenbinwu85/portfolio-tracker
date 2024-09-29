import { inject, Injectable } from "@angular/core";
import {
  CollectionReference,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private collectionName = 'ahbenfolio';
  private firestore: Firestore;
  private collectionRef!: CollectionReference;
  private collectionDocs$!: Observable<any[]>;
  public documentName?: string;

  constructor() {
    this.firestore = inject(Firestore);
    this.setCollectionRef();
    this.setCollectionDataObservable();
  }

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
