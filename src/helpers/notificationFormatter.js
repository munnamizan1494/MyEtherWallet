import BigNumber from 'bignumber.js';

const type = {
  TRANSACTION: 'Transaction',
  TRANSACTION_HASH: 'Hash',
  TRANSACTION_RECEIPT: 'Receipt',
  TRANSACTION_ERROR: 'Error',
  CONTRACT_CALL: '',
  SWAP: 'swap',
  SWAP_ORDER: 'Swap'
};

const notificationType = {
  TRANSACTION: 'transaction',
  SWAP: 'swap',
  ERROR: 'transactionError'
};

const swapOnlyStatuses = {
  NEW: 'new',
  CANCELLED: 'cancelled'
};

const notificationStatuses = {
  NEW: 'new',
  PENDING: 'pending',
  COMPLETE: 'complete',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};


const identifySwapForTransaction = (notifArray, val) =>{
  console.log(notifArray[notifArray.length - 1]); // todo remove dev item
  const idx = notifArray.findIndex(
    entry => entry.type === 'swap' && entry.body.to === val[1].to
  );
  notifArray.forEach(entry => {
    if (entry.body.to === val[1].to) {
      console.log(entry.type);
    }
  });

  if (idx > 0) {
    if (
      notifArray[idx - 1].type === notificationType.SWAP &&
      val[1].to === notifArray[idx - 1].to
    ) {
      notifArray[idx].status = 'complete';
    }
  }

  if (notifArray.length > 1) {
    console.log(notifArray[notifArray.length - 1].type); // todo remove dev item
    if (
      notifArray[notifArray.length - 1].type === notificationType.SWAP &&
      val[1].to === notifArray[notifArray.length - 1].to
    ) {
      console.log('is a swap'); // todo remove dev item
      notifArray[notifArray.length - 1].hash = val[2];
    }
  }

};

const transactionHash = (notifArray, val) => {
  // TODO: use transfer method call signature to identify token transfer.


  notifArray.push({
    title: 'Transaction',
    read: false,
    timestamp: new Date(),
    type: notificationType.TRANSACTION,
    status: notificationStatuses.PENDING,
    hash: val[2],
    body: {
      error: false,
      hash: val[2],
      to: val[1].to,
      amount: new BigNumber(val[1].value).toString(),
      nonce: new BigNumber(val[1].nonce).toString(),
      gasPrice: new BigNumber(val[1].gasPrice).toString(),
      gasLimit: new BigNumber(val[1].gas).toString()
    },
    expanded: false
  });

  return notifArray;
};

const transactionReceipt = (notifArray, val) => {


  const idx = notifArray.findIndex(
    entry => entry.hash === val[2].transactionHash
  );

  notifArray[idx].notificationStatuses = notificationStatuses.COMPLETE;
  notifArray[idx].body.gasUsed = new BigNumber(val[2].gasUsed).toString();
  notifArray[idx].body.blockNumber = new BigNumber(
    val[2].blockNumber
  ).toString();
  return notifArray;
};

const transactionError = (notifArray, val) => {
  notifArray.push({
    title: 'Transaction',
    read: false,
    timestamp: new Date(),
    type: notificationType.ERROR,
    status: notificationStatuses.FAILED,
    hash: val[2],
    body: {
      error: true,
      errorMessage: val[2].hasOwnProperty('message') ? val[2].message : val[2]
    },
    expanded: false
  });

  return notifArray;
};

const swapOrder = (notifArray, val) => {
  console.log('swapOrder'); // todo remove dev item
  console.log(val); // todo remove dev item
  notifArray.push({
    title: 'Swap',
    read: false,
    timestamp: new Date(),
    type: notificationType.SWAP,
    status: notificationStatuses.PENDING,
    swapStatus: swapOnlyStatuses.NEW,
    hasTransaction: false,
    body: {
      to: val[2].toAddress,
      from: val[2].fromAddress,
      fromValue: val[2].fromValue,
      toValue: val[2].toValue,
      fromCurrency: val[2].fromCurrency,
      toCurrency: val[2].toCurrency,
      orderId: val[2].parsed.orderId,
      statusId: val[2].parsed.statusId,
      timeRemaining: val[2].parsed.validFor,
      createdAt: val[2].parsed.timestamp,
      // nonce: val[2].nonce,
      // gasPrice: val[2].gasPrice,
      // gasLimit: val[2].gas,
      rate: val[2].rate,
      provider: val[2].provider
    },
    // body: val[2].hasOwnProperty('message') ? val[2].message : val[2],
    expanded: false
  });

  return notifArray;
};

const addUpdateNotification = function(newNotif, val) {
  console.log('addUpdateNotification', val); // todo remove dev item
  switch (val[0]) {
    case type.TRANSACTION_HASH:
      return transactionHash(newNotif, val);
    case type.TRANSACTION_RECEIPT:
      return transactionReceipt(newNotif, val);
    case type.TRANSACTION_ERROR:
      return transactionError(newNotif, val);
    case type.SWAP_ORDER:
      return swapOrder(newNotif, val);
    default:
      break;
  }
};

const addUpdateSwapNotification = function(newNotif, val) {
  console.log('addUpdateSwapNotification', val); // todo remove dev item
  switch (val[0]) {
    case type.SWAP_ORDER:
      return swapOrder(newNotif, val);
    default:
      break;
  }
};

export { swapOnlyStatuses, notificationStatuses, addUpdateNotification, addUpdateSwapNotification };
