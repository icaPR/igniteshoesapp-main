import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "user",
    user_email: "user@email.com",
  });
}
