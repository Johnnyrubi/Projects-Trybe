

const err = ({});


const validationName = (name) => {
  if(!name) throw err({ status: 400, message: "Invalid entries. Try again."});
};

const validationEmail = (email) => {
  if(!email) throw err({ status: 400, message: "Invalid entries. Try again."});
};

const validationPassword = (password) => {
  if(!password) throw err({ status: 400, message: "Invalid entries. Try again."});
};

const validationRole = (role) => {

};
