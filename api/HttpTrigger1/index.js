module.exports = async function (context, req) {
    if (!req.query) return;

    if (req.query.set) {
        context.res = {
            body: "Setting cookies",
            cookies: [
                {
                    name: '__prerender_bypass',
                    value: '182a0e65ed279a55552ac01e7e9f64f5',
                    path: '/',
                    secure: true,
                    httpOnly: true,
                    sameSite: 'Strict'
                },
                {
                    name: '__next_preview_data',
                    value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNmUxYzRiMDNkYzJhODMxNDc5YTljZjViZmJlZWYxOWZkMjQ1N2Y0YWQ3Y2FjOWIxMmIwYjVjM2NhYzFiZGVkMGY2NjUxMTE4ZmY3NTg3NzY5ODFjYmUwYjI3YjgwZTE2NTNhMTVlNmJkOGI2ZjdjZjQxZDI5OTZmZmJmMmQzMDkzMmEzYTQ4ZThlMTVlZmZhZWQ5MTdkZGM4YWUxNzQ2MjU1ZTQ1MjkzZDgwYzdkNGQ2ODQ2MmI4MjliMmRmMTI3Yjg2MSIsImlhdCI6MTYzNzA1MTgxNn0.REIyk61h-jhTEOUWdYEAPf6DWCXDkbJCJfI18BU31ck',
                    path: '/',
                    secure: true,
                    httpOnly: true,
                    sameSite: 'Strict'
                }
            ]
        };
    } else if (req.query.delete) {
        context.res = {
            body: "Deleting cookies",
            cookies: [
                {
                    name: '__prerender_bypass',
                    value: '',
                    path: '/',
                    expires: 1,
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None'
                },
                {
                    name: '__next_preview_data',
                    value: '',
                    path: '/',
                    expires: 1,
                    httpOnly: true,
                    secure: true,
                    sameSite: 'None'
                }
            ]
        };
    }
}