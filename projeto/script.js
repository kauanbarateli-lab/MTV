function gerarLink() {
      const email = document.getElementById('email').value.trim();
      if (email === '') {
        alert('Por favor, insira um e-mail válido.');
        return;
      }

      const baseUrl = 'https://shopify.pxf.io/c/3199629/1061744/13624?subId1=builder_metodovoe&subId2=mentoria&subId3=';
      const encodedEmail = encodeURIComponent(email);
      const fullUrl = baseUrl + encodedEmail;

      const displayUrl = baseUrl + email; // Para exibição amigável

      document.getElementById('link').innerHTML = `
        <p>Seu link:</p>
        <a href="${fullUrl}" target="_blank">${displayUrl}</a>
      `;
    }