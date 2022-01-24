export async function search(options = {}) {
    const params = {
        ...options,
    };

    if ( options.nextCursor ) {
        params.next_cursor = options.nextCursor;
        delete params.nextCursor;
    }

    const paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');

    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?${paramString}`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
        }}).then(r => r.json());

        return results;
}

export function mapImageResources(resources) {
    return resources.map(resources => {
        const { width, height } = resources 
        return {
            id: resources.asset_id,
            image: resources.secure_url,
            width,
            height
        }
    });
}

export async function getFolders(options = {}) {

    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
        }}).then(r => r.json());

        return results;
}

//Cool but no dice