var account = {
  balance: 0
};

function deposit(account, amount) {
  account.balance += amount;  
}

function withdraw(account, amount) {
  if (amount > account.balance) {
    console.log('Operation failed: insufficient funds');
    return;
  }
  account.balance -= amount;
}

function getBalance(account){
  return account.balance;
}
