import User from './schemas/user.schema.js';

export const findUserByIdInDB = async id => await User.findOne({ _id: id });

export const findUserByEmailInDB = async email => await User.findOne({ email });

export const findUserByTokenInDB = async token => await User.findOne({ token });

export const createUserInDB = async (email, password, avatarURL) =>
  await new User({ email, password, avatarURL }).save();

export const updateKeyInDBForUserWithId = async (field, id) => {
  await User.findByIdAndUpdate({ _id: id }, field, { new: true });
};

export const deleteUserFromDB = async email => await User.deleteOne({ email });