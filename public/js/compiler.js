(function() {
  var alphabet = {
    "letters": {
      "lowerCases": {
        "a": "([]+![])[+!+[]]",
        "b": "([]+{})[+!+[]+!+[]]",
        "c": "([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "d": "([]+[][+[]])[+!+[]+!+[]]",
        "e": "([]+[][+[]])[+!+[]+!+[]+!+[]]",
        "f": "([]+![])[[]+(+[])]",
        "g": "([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "h": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "i": "([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "j": "([]+{})[+!+[]+!+[]+!+[]]",
        "k": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "l": "([]+![])[+!+[]+!+[]]",
        "m": "([]+(+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "n": "([]+[][+!+[]])[+!+[]]",
        "o": "([]+{})[+!+[]]",
        "p": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "q": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "r": "([]+!![])[+!+[]]",
        "s": "([]+![])[+!+[]+!+[]+!+[]]",
        "t": "([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "u": "([]+!![])[+!+[]+!+[]]",
        "v": "([]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "w": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "x": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])",
        "y": "([]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "z": "(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])"
      },
      "upperCases": {
        "A": "([]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "S": "([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "O": "([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "N": "([]+(+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]",
        "F": "([]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]"
      }
    },
    "space": {
      " ": "([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]"
    },
    "baseSymbols": ["[", "]", "{", "}", "(", ")", "!", "+"],
    "baseCombinations": {
      "true": "[]+!![]",
      "undefined": "[]+[][+[]]",
      "[object Object]": "[]+{}",
      "false": "[]+![]",
      "0": "[]+(+[])",
      "1": "[]+(+!+[])"
    },
    "functions": {
      "function Number() { [native code] }": "([]+(+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])",
      "function Array() { [native code] } ": "[]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]]",
      "function Function() { [native code] }": "[]+[][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]]",
      "function toString() { [native code] }": "[]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]]",
      "function String() { [native code] }": "([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]]"
    },
    "window": {
      "window": "([][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]][([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]](([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+![])[+!+[]+!+[]+!+[]])())",
      "methods": {
        "unescape": "([]+!![])[+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+![])[+!+[]]+(+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+[][+[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+[][+!+[]])[+!+[]]+([]+([]+[])[([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+[][+!+[]])[+!+[]]+([]+![])[+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+!![])[+!+[]]+([]+!![])[+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([]+{})[+!+[]]+([]+!![])[+!+[]]])[+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]](+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[])+([]+[][+[]])[+!+[]+!+[]+!+[]]"
      }
    }
  }

  var letters = Object.assign(
    alphabet.letters.lowerCases,
    alphabet.letters.upperCases,
    alphabet.space
  );

  var baseSymbols = alphabet.baseSymbols;

  var textSection = document.getElementById('textSection');
  var compileButton = document.getElementById('compileToBrackets');
  var resultSection = document.getElementById('resultOutput');
  compileButton.addEventListener('click', function() {
    var textValue = textSection.value;
    if (resultSection.className.indexOf('active') == -1) {
      resultSection.className += ' active';
    }
    resultSection.innerHTML = compile(textValue);
  });

  function compile(str){
    var compiled = '';
    var chars = str.split('');
    for(var i=0; i < chars.length - 1; i++) {
      // exclude !+(){}[] symbols
      if (baseSymbols.indexOf(chars[i]) == -1) {
        compiled += letters[chars[i]];
        if(i != chars.length - 2) {
          compiled += '+';
        }
      } else {
        // TODO: Optimize this case
        compiled = compiled.substr(0, compiled.length - 1);
        compiled += chars[i];
      }
    }
    return compiled;
  }
}());
