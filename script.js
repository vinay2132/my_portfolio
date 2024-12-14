function TextShuffle(_txt) {
  var _this = this;
  _this._index = 0;

  var _finalString,
    _finalLength,
    _currentString = "";
  var _randChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "?",
    "-",
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "|",
    "<",
    ">",
    "/",
    "",
    ".",
    ",",
    ";",
    ":",
    "'",
  ];
  var _chars = _randChars.length;
  var _casing = 0; //0=normal, 1=upper, 2=lower

  _this.to = function (_newStr, _time, casing) {
    (_finalString = _newStr), (_casing = casing);
    (_finalLength = _finalString.length), (_this._index = 0);
    TweenLite.killTweensOf(_this);
    TweenLite.to(_this, _time || 2, {
      _index: _finalLength * 2,
      ease: Quad.easeOut,
      onUpdate: shuffle,
    });
  };

  function shuffle() {
    //Start writing the correct text when halfways
    if (_this._index > _finalLength)
      _currentString =
        _finalString.slice(0, _this._index - _finalLength) +
        randomString().slice(0, _finalLength - _this._index);
    else _currentString = randomString();

    // if(_casing == 0) _txt.innerHTML = _currentString;
    // else if(_casing == 1) _txt.innerHTML = _currentString.toUpperCase();
    // else _txt.innerHTML = _currentString.toLowerCase();
    _txt.innerHTML = _currentString;
  }

  function randomString() {
    var _char = "",
      _str = "";
    for (var i = 0; i < _this._index * 0.5; ++i) {
      _char = _randChars[Math.floor(Math.random() * _chars)];
      if (_casing == 2) _char = _char.toLowerCase();
      _str += _char;
    }
    return _str;
  }
}

var _index = -1;
var _demoTexts = ["webapps", "ui/ux", "games"];
_shuffle = new TextShuffle(document.getElementById("main_container"));

setTimeout(newText, 10000);

function newText() {
  _index++;
  if (_index >= _demoTexts.length) _index = 0;
  _shuffle.to(_demoTexts[_index], 1.2, Math.floor(Math.random() * 3));

  // Schedule the next execution after 10 seconds
  setTimeout(newText, 10000);
}


document.addEventListener('mousemove', (e) => {
  const glowingCircle = document.querySelector('.glowing-circle');
  
  // Set the position of the glowing circle to the mouse position
  glowingCircle.style.left = `${e.pageX - glowingCircle.offsetWidth / 2}px`;
  glowingCircle.style.top = `${e.pageY - glowingCircle.offsetHeight / 2}px`;

  // Add the active class to trigger the glowing effect
  glowingCircle.classList.add('active');
});

document.addEventListener('mouseleave', () => {
  // Remove the glowing effect when mouse leaves the screen
  const glowingCircle = document.querySelector('.glowing-circle');
  glowingCircle.classList.remove('active');
});


