async function sendToServer(data){
    const response = await fetch(`http://localhost/bibar-vue-php/obj_api.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.text();

    var obj;
    try {
      obj = JSON.parse(responseData);
      if (typeof obj['error'] != 'undefined') {
        console.log('Error from ' + service + '.php - ' + obj['error']);
        return null;
      }
      return obj;
    } catch (err) {
      console.log('Error from obj_api.php - ' + responseData);
      return null;
    }

    // if (!response.ok) {
    //   const error = new Error(responseData.message || 'Failed to fetch!');
    //   throw error;
    // }
}

export {sendToServer};