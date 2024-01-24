import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "User already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});
// we do that if we work with always on, always running BE server
// const User = model("User", UserSchema);
// export default User;

// in next js the route will only be crated and running by the time it's being called (the connection is established every time, so we need to make additional check)

const User = models.User || model("User", UserSchema);
export default User;
