const express = require("express");
const contrrollWrapper = require("../../helpers/ctrlWrapper");
const authCtrl = require("../../controllers/auth");
const { auth, validateBody, upload } = require("../../middlewares");
const schema = require("../../schemas/authSchema");

const router = express.Router();

router.post("/refresh", contrrollWrapper(authCtrl.refreshTokens));

router.post(
    "/signup",
    validateBody(schema.signUpSchema),
    contrrollWrapper(authCtrl.signUp)
);

router.post(
    "/signin",
    validateBody(schema.signInSchema),
    contrrollWrapper(authCtrl.signIn)
);

router.get(
    "/current",
    contrrollWrapper(auth),
    contrrollWrapper(authCtrl.getCurrentUser)
);

router.post(
    "/signout",
    contrrollWrapper(auth),
    contrrollWrapper(authCtrl.signOut)
);

router.patch(
    "/avatars",
    contrrollWrapper(auth),
    upload.single("avatar"),
    contrrollWrapper(authCtrl.uploadAvatar)
);

router.patch(
    "/theme",
    contrrollWrapper(auth),
    validateBody(schema.updThemeSchema),
    contrrollWrapper(authCtrl.updateTheme)
);

module.exports = router;
