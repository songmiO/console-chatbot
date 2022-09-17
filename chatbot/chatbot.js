function confirm() {
  const inputValue = document.getElementsByClassName('chatbot-input')[0].value;
  const chatBotBox = document.getElementsByClassName('text-result')[0];

  if (inputValue == '안녕') {
    chatBotBox.innerHTML = '반가워!';
  } else if (inputValue == '너 이름이 뭐야?') {
    chatBotBox.innerHTML = '난 땅땅 오락실 게임기야!';
  } else if (inputValue == '너는 누구야?') {
    chatBotBox.innerHTML = '21세기 최첨단 게임기!';
  } else if (inputValue == '오늘 기분 어때?') {
    chatBotBox.innerHTML = '아주 좋아!😊';
  } else if (inputValue == '조코딩') {
    document.getElementsByClassName('jo-coding-image')[0].style.visibility =
      'visible';
    chatBotBox.innerHTML = '지구 최강 최고의 코딩 유튜브!😎';
  } else {
    chatBotBox.innerHTML = '아직 배우지 않은 말이예요. 가르쳐 주세요!';
  }
}
