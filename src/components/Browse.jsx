import React from 'react';


function Browse(){
  const divStyle = (src) => ({
    backgroundImage: 'url(' + src + ')',
    width: '480px',
    height: '720px',
    backgroundSize: '500px auto',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    fontWeight: '10em'
  });

  var images = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5873be0-397e-471f-b32e-a822f9edb1d1/ddebun7-a6e1fa6c-34bc-4b55-bbb0-0e7e552f0fd9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1ODczYmUwLTM5N2UtNDcxZi1iMzJlLWE4MjJmOWVkYjFkMVwvZGRlYnVuNy1hNmUxZmE2Yy0zNGJjLTRiNTUtYmJiMC0wZTdlNTUyZjBmZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YlL5XetgkgkV9KviO02JgAowkF7FI5y30uTB4DxDZd8' , 'https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/46073_article_full.jpg.webp?itok=3ZyetJTQ&resize=1200x1200', 'https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/46073_article_full.jpg.webp?itok=3ZyetJTQ&resize=1200x1200', 'https://images.theweek.com/sites/default/files/styles/tw_image_9_4/public/46073_article_full.jpg.webp?itok=3ZyetJTQ&resize=1200x1200', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5873be0-397e-471f-b32e-a822f9edb1d1/ddebun7-a6e1fa6c-34bc-4b55-bbb0-0e7e552f0fd9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1ODczYmUwLTM5N2UtNDcxZi1iMzJlLWE4MjJmOWVkYjFkMVwvZGRlYnVuNy1hNmUxZmE2Yy0zNGJjLTRiNTUtYmJiMC0wZTdlNTUyZjBmZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YlL5XetgkgkV9KviO02JgAowkF7FI5y30uTB4DxDZd8', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5873be0-397e-471f-b32e-a822f9edb1d1/ddebun7-a6e1fa6c-34bc-4b55-bbb0-0e7e552f0fd9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U1ODczYmUwLTM5N2UtNDcxZi1iMzJlLWE4MjJmOWVkYjFkMVwvZGRlYnVuNy1hNmUxZmE2Yy0zNGJjLTRiNTUtYmJiMC0wZTdlNTUyZjBmZDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YlL5XetgkgkV9KviO02JgAowkF7FI5y30uTB4DxDZd8'
  ];
  return (
    <div className="row">
      {images.map((i,index) =>
        <div key={index} className="col-md-6" style={divStyle(i)}>
        <h1>stonks</h1>
        </div>
      )}
    </div>
  );
}

export default Browse;