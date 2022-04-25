document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositValue = depositInput.value;
    depositInput.value = "";

    // setting deposit innertext
    const depositText = document.getElementById("deposit-text");
    const oldDepositvalue = depositText.innerText;

    const depositTotal =
      parseFloat(newDepositValue) + parseFloat(oldDepositvalue);

    depositText.innerText = depositTotal;

    // Balance update

    const balanceText = document.getElementById("balance-text");
    const balanceInnerText = balanceText.innerText;
    const parsedBalance = parseFloat(balanceInnerText);
    const totalBalance = parsedBalance + parseFloat(newDepositValue);
    balanceText.innerText = totalBalance;
  });

// handling withdraw section

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // withdraw input value

    const withdrawInputText = document.getElementById("withdraw-input");
    const withdrawInputValue = withdrawInputText.value;
    const parsedWithdrawInputValue = parseFloat(withdrawInputValue);
    withdrawInputText.value = "";
    // withdraw display

    const withdrawText = document.getElementById("withdraw-text");
    const withdrawInnerText = withdrawText.innerText;
    const parsedWithdrawInnerText = parseFloat(withdrawInnerText);
    const totalWithdraw = parsedWithdrawInputValue + parsedWithdrawInnerText;
    withdrawText.innerText = totalWithdraw;

    // updating balance

    const oldBalanceText = document.getElementById("balance-text");
    const oldBalanceInnerText = oldBalanceText.innerText;
    const parsedOldBalanceInnerText = parseFloat(oldBalanceInnerText);
    const updatedTotalBalance =
      parsedOldBalanceInnerText - parsedWithdrawInputValue;

    oldBalanceText.innerText = updatedTotalBalance;
  });
