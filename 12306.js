console.show()
while (true) {
  if (findTicket(true) || findTicket(false)) {
    break;
  }
}
function findTicket(isForward) {
  className("android.widget.Button").findOne().click();
  sleep(1000);
  className("android.widget.TextView").text("价格最高").findOne().click();
  className("android.widget.TextView").text("价格最高").findOne().click();
  for (let i = 0; i < 2; i++) {
    if (className("android.widget.TextView").textMatches("/硬卧有|硬卧\d{1,2}张/g").findOnce()) {
      log("找到硬卧");
      return true;
    }
    log("没找到硬卧，跳到另一天");
    if (isForward) {
      className("android.widget.TextView").text("前一天").findOne().click();
    } else {
      className("android.widget.TextView").text("后一天").findOne().click();
    }
    sleep(1000);
  }
  back();
  sleep(getRandomArbitrary(5, 10) * 1000);
  return false;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}