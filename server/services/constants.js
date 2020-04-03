module.exports = {
    types: {
        admin: "admin",
        user: "user",
        company: "company",
    },
    status: {
        pending: "pending",
        done: "done",
        active: "active",
        accepted: "accepted",
        declined: "declined",
    },
    socketListeners: {
        newAccount: "new_account",
        deleteUser: "delete_user",
        deleteCompany: "delete_company",
        newOrder: "new_order",
        deleteOrder: "delete_order",
        userTakeOrder: "user_take_order",
    },
    socketEmitters: {
        updateUserList: "update_user_list",
        updateCompanyList: "update_company_list",
        deletedUser: "deleted_user",
        deletedCompany: "deleted_company",
        updateOrderList: "update_order_list",
        deletedOrder: "deleted_order",
        userTookOrder: "user_took_order",
    },
    messages: {
        errorMessage: "Something went wrong, try later",
        errorAuthFailed: "Auth failed: email or password is incorrect",
        errorPendingMessage:
            "Our admin team is reviewing your sign up request. Please wait for the response!",
        errorDeclinedMessage:
            "Your sign-up request has unfortunately been declined. Please contact our administration for more information.",
        errorNoContent: "No more content",
        errorAlreadyExists: "Email already exists",
        errorOldPasswordMessage: " Old Password is incorrect",
        errorUserCannotDel:
            "The User cannot be deleted. The User has pending order(s)!",
        errorCompanyCannotDel:
            "The company cannot be deleted. The company has pending order(s)!",
        errorNotEnoughMoney: `You can't create order, you don't enough money`,
        errorNoSuchUser: "There is no such user",
        errorEmptyFields: "Some input fields are wrong or empty",

        successDeletedMessage: "Deliverer deleted",
        successOrderDeleted: "Order deleted",
        successOrderRated: "Order has been rated",
        successOrderUpdated: "Order updated",
        successPasswordChanged: "Password has changed",
        successAuthMessage: "Auth successful",
        successUserDeleted: "User has been deleted",
        successUserCreated: "User successfully created",
    },
};
