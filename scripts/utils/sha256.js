module.exports.sha256 = async (public_key, secret_key, digestType) => {
    const { createHmac } = await import("crypto")
    return createHmac("sha256", secret_key)
        .update(public_key)
        .digest("hex")
}
