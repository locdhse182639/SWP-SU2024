import accountData from "../../data/userAccount"

export function authenticateUser (username, password) {
    const user = accountData.find(
        (acc) =>
            acc.username === username
            &&
            acc.password === password
    );
    return user;
}