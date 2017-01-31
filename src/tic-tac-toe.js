class TicTacToe {

    constructor() {
        this.counter = 0;
        this.desk = [[],[],[]];
        this.players = ['x','o'];
    }

    getCurrentPlayerSymbol() {
        return this.players[this.counter];
    }

    nextTurn(rowIndex, columnIndex) {//0,1
        
        if(!(this.desk[rowIndex][columnIndex])){
            this.desk[rowIndex][columnIndex]  = this.players[this.counter];
            this.counter++;
            if(this.counter > 1) this.counter = 0;
            return this.players[this.counter]; 
        }
        else return this.players[this.counter];
    }

    isFinished() {
        if(this.getWinner()) return true;
        return this.noMoreTurns();
    }

    getWinner() {
        // 0 0 0
        if (this.desk[0][0] == this.desk[1][0] && this.desk[1][0] == this.desk[2][0] && this.desk[2][0]) return this.desk[0][0];
        if (this.desk[0][1] == this.desk[1][1] && this.desk[1][1] == this.desk[2][1] && this.desk[2][1]) return this.desk[0][1];
        if (this.desk[0][2] == this.desk[1][2] && this.desk[1][2] == this.desk[2][2] && this.desk[2][2]) return this.desk[0][2];

        if (this.desk[0][0] == this.desk[0][1] && this.desk[0][1] == this.desk[0][2] && this.desk[0][2]) return this.desk[0][0];
        if (this.desk[1][0] == this.desk[1][1] && this.desk[1][1] == this.desk[1][2] && this.desk[1][2]) return this.desk[1][0];
        if (this.desk[2][0] == this.desk[2][1] && this.desk[2][1] == this.desk[2][2] && this.desk[2][2]) return this.desk[2][0];

        if (this.desk[0][0] == this.desk[1][1] && this.desk[1][1] == this.desk[2][2] && this.desk[2][2]) return this.desk[0][0];

        if (this.desk[2][0] == this.desk[1][1] && this.desk[1][1] == this.desk[0][2] && this.desk[0][2]) return this.desk[2][0];
        return null;
    }

    noMoreTurns() {
        var full = true;
        var cellCounter = 0;
        for(var i = 0; i < this.desk.length; i++){//collumn counter
            for(var j = 0; j < this.desk[i].length; j++){// row counter
                if(this.desk[i][j]){
                  full = false;
                  cellCounter++;  
                } 
            }
        }
        if(cellCounter == 9) full = true;
        return full;
    }

    isDraw() {
        if(this.getWinner()) return false;
        return this.noMoreTurns(); 
    }

    getFieldValue(rowIndex, columnIndex) {
        if(!this.desk[rowIndex][columnIndex]) return null;
        else return this.desk[rowIndex][columnIndex];
    }
}

module.exports = TicTacToe;
