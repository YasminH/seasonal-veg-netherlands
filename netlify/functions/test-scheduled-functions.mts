import type { Config } from "@netlify/functions"

export default async (req: Request) => {
    const response = await fetch(`https://api.netlify.com/build_hooks/${process.env.BUILD_KEY}`, {
        method: 'POST'
    })

    if (response.ok) {
        console.log("Triggered Netlify deploy successfully.")
    } else {
        console.error("Failed to trigger Netlify deploy.")
    }
}

export const config: Config = {
    schedule: "@hourly"
}