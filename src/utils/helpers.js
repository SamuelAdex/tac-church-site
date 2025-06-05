export const storeImage = async (file) => {
    if (!file) return;
  
    if (['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(file.type)) {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'champsDL');
      data.append('cloud_name', 'dwhs7vn6y');
  
      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dwhs7vn6y/image/upload', {
          method: 'POST',
          body: data,
        });
  
        const result = await response.json();

        // return result.url  // Return the image URL
        return {url: result.url, publicId: result.public_id};  // Return the image URL
      } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image');
      }
    } else {
      throw new Error('Invalid file type');
    }
  };