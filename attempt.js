function attempt(func, ...inputs) {
    try {
        return func(...inputs);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
}