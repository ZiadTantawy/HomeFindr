import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import User from "./userModel.js";
import dotenv from "dotenv";

dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWTsecret
};

const passportConfig = passport.use(new Strategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => done(err, false));
}));
