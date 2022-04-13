class CustomError extends Error {
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }
}

class MoreCustomError extends CustomError {
    constructor(type) {
        super('Custom error has occured');
        this.name = 'CustomError' + type;
    }
}

try {
    throw new MoreCustomError('more');
} catch (error) {
    console.log(error);
}