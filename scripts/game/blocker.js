class Blocker {

    constructor() {
        this.blocked = false;
    }

    block() {
        this.blocked = true;
    }

    unBlock() {
        this.blocked = false;
    }

    isBlocked() {
        return this.blocked;
    }

}

export default Blocker;
