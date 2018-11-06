var accounts = [];

function createAccount(account) {
	accounts.push(account);	
	return account;
}

function getAccount(username) {
	var match;

	for (i = 0; i < accounts.length; i++) { 
		if (account[i].username === username) {
			match = accounts[i];
		}
	}
	
	return match;
	
}

function deposit(account, amount){
	// Only accept number, use typeOf
	if (typeof amount  === 'number') {
			account.balance += amount;
	}
	else{
		console.log("Invalid amount")
	}
}

function withdraw(account, amount){
	// Only accept number
	if (typeof amount  === 'number') {
			account.balance -= amount;
	}
	else{
		console.log("Invalid amount")
	}
}

function getBalance(account) {
	return account.balance;
}

function createBalanceGetter(account) {
	return function () {
		return account.balance;
	}
}
		
var ahad = createAccount({
	account: 'ahad'
})