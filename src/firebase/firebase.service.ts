import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class FirebaseRepository {
  #db: FirebaseFirestore.Firestore;
  #collection: FirebaseFirestore.CollectionReference;

  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {
    this.#db = firebaseApp.firestore();
    this.#collection = this.#db.collection('products');
  }

  async create(data: any) {
    console.log('data : ', data)
    const docRef = await this.#collection.add(data);
    return { id: docRef.id, ...data };
  }

  async findAll() {
    const snapshot = await this.#collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  async findById(id: string) {
    const doc = await this.#collection.doc(id).get();
    if (!doc.exists) throw new Error('Product not found');
    return { id: doc.id, ...doc.data() };
  }

  async update(id: string, data: any) {
    await this.#collection.doc(id).update(data);
    return { message: 'Updated successfully', id };
  }

  async delete(id: string) {
    await this.#collection.doc(id).delete();
    return { message: 'Deleted successfully', id };
  }
}
