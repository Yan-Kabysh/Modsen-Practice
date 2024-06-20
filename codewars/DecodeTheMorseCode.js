decodeMorse = function(code){
    const MORSE_CODE = {
      ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E",
      "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J",
      "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O",
      ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T",
      "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y",
      "--..": "Z", "-----": "0", ".----": "1", "..---": "2", "...--": "3",
      "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8",
      "----.": "9", ".-.-.-": ".", "--..--": ",", "..--..": "?", "-..-.": "/",
      "-....-": "-", "-.--.": "(", "-.--.-": ")", "": " ", "...---...": "SOS",
      "-.-.--": "!"
    };
      const morseWords = code.trim().split("   "); 
      const decodedMessage = morseWords.map(morseWord => {
        const morseChars = morseWord.split(" ");
        const decodedWord = morseChars.map(char => MORSE_CODE[char]).join("");
        return decodedWord;
      }).join(" "); 
    
      return decodedMessage.replace(/\s+/g, " ").trim();
    }