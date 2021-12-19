export const getGifts = () =>
  new Promise((resolve, reject) => {
    const gifts = JSON.parse(localStorage.getItem('gifts'))
    
    if (!gifts) {
      return setTimeout(
        () => reject(new Error('Gifts not found')),
        3000
      );
    }
    setTimeout(() => resolve(gifts), 3000);
  })

