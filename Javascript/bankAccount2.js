var accounts = [];

// Account object
// int balance
// string username
// 

var ahadAccount = {
	balance: 5000,
	username: 'ahad'
};

// Create account 
// createAccount(account);
// push onto accounts array
// return account

function createAccount(account) {
	accounts.push(account);	
	return account;
}

// getAccount(username);
// find matching account using forEach

function getAccount(username) {
	
	var match;
	
	accounts.forEach(function (account) {
		if (account.username === username) {
			match = account;
		}
	});
	
	return match;
	
}

function deposit(account, amount){
	account.balance += amount;
}

function withdraw(account, amount){
	account.balance -= amount;
}

function getBalance(account) {
	return account.balance;
}

var ahad = createAccount(ahadAccount);
deposit(ahadAccount, 4000);
withdraw(ahadAccount, 5000);

var bob = createAccount({
	balance: 400,
	username: 'bob'
})
deposit(bob, 600);
withdraw(bob, 40);

console.log(ahadAccount.balance);
console.log(bob.balance);

console.log(accounts)

var testExisting = getAccount('bob');
console.log(testExisting);

