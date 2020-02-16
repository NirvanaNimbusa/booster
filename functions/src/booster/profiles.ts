import * as admin from "firebase-admin";
import { PrivateProfile, Profile, ReadonlyProfile } from "../types";

export const getUserProfile = async (uid: string) => {
  const snapshot = await admin
    .firestore()
    .collection("userProfiles")
    .doc(uid)
    .get();
  const profile: Profile = snapshot.data() as any;
  if (!snapshot.exists || profile == null) {
    throw new Error(`User ${uid}'s profile does not exist`);
  }
  return profile;
};

export const getPrivateProfile = async (uid: string) => {
  const snapshot = await admin
    .firestore()
    .collection("userPrivateProfiles")
    .doc(uid)
    .get();
  const profile: PrivateProfile = snapshot.data() as any;
  if (!snapshot.exists || profile == null) {
    throw new Error(`User ${uid}'s private profile does not exist`);
  }
  return profile;
};

export const getReadonlyProfile = async (uid: string) => {
  const snapshot = await admin
    .firestore()
    .collection("userReadonlyProfiles")
    .doc(uid)
    .get();
  const profile: ReadonlyProfile = snapshot.data() as any;
  if (!snapshot.exists || profile == null) {
    throw new Error(`User ${uid}'s read only profile does not exist`);
  }
  return profile;
};
