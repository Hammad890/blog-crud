// import { Router, Request } from 'express';
// import { ProtectedRequest } from 'app-request';
// import UserRepo from '../Api/Components/access/user.repository';
// import { AuthFailureError, AccessTokenError, TokenExpiredError } from '../core/ApiError';
// import JWT from '../core/JWT';
// import KeystoreRepo from '../Api/Components/access/keystore.repository';
// import { getAccessToken, validateTokenData } from '../utils/authUtils';
// import validator, { ValidationSource } from '../helpers/validator';
// import { authBearerSchema } from '../utils/joi.schema';
// import asyncHandler from '../helpers/async';

// const router = Router();

// export default router.use(
//   validator(authBearerSchema, ValidationSource.HEADER),
//   asyncHandler(async (req: any, res, next) => {
//     req.accessToken = getAccessToken(req.headers.authorization); // Express headers are auto converted to lowercase
//     try {
//       const payload = await JWT.validate(req.accessToken);
//       validateTokenData(payload);

//       const user = await UserRepo.findById(payload.sub);
//       if (!user) throw new AuthFailureError('User not registered');
//       if (!user.isActive) throw new AuthFailureError('You have been blocked by admin');

//       req.user = user;

//       if(req.user && req.user.role.code === "SUPER_ADMIN"){
//         req.user.isAdmin = true;
//       }

//       else if(req.user && req.user.role.code === "VIRTUAL_ASSISTANT"){
//         req.user.isVA = true;
//       }

//       const keystore = await KeystoreRepo.findforKey(req.user.id, payload.prm);
//       if (!keystore) throw new AuthFailureError('Invalid access token');
//       req.keystore = keystore;

//       return next();
//     } catch (e) {
//       if (e instanceof TokenExpiredError) throw new AccessTokenError(e.message);
//       throw e;
//     }
//   }),
// );

// // export const authentication = (router: Router, path: string, methods: [string]): void => {

// //   router.use(
// //     path,
// //     validator(authBearerSchema, ValidationSource.HEADER),
// //     asyncHandler(async (req: any, res, next) => {
// //       console.log(req.method, methods);
      
// //       req.accessToken = getAccessToken(req.headers.authorization); // Express headers are auto converted to lowercase
// //       try {
// //         const payload = await JWT.validate(req.accessToken);
// //         validateTokenData(payload);

// //         const user = await UserRepo.findById(new Types.ObjectId(payload.sub));
// //         if (!user) throw new AuthFailureError('User not registered');
// //         req.user = user;

// //         const keystore = await KeystoreRepo.findforKey(req.user._id, payload.prm);
// //         if (!keystore) throw new AuthFailureError('Invalid access token');
// //         req.keystore = keystore;

// //         return next();
// //       } catch (e) {
// //         if (e instanceof TokenExpiredError) throw new AccessTokenError(e.message);
// //         throw e;
// //       }
// //     }),
// //   );

// // }