const getId = (url) => {
    const id = url ? url.split('/').at(-2) : undefined;
    return id;
};

export { getId };
