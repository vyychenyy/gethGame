const Web3 = require('web3');
var web3;
var account = "0x423A87eaF4654871Fe83478cfBE40FcA6827783b";
var GameContract;
var Game;
var number;
var bet;
$(document).ready(function() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
    // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
    }

    $("#login").click(function() {
        $("#msg").text("Loging...");
        web3.personal.unlockAccount(account, "a63748cc70122e7f31a4025cbbfe68d36b81fe622a393ad6bbfee67784f30a29", 1200,
            function () {
                $("#msg").text("Login done.");
                $("#deploy").removeAttr("disabled");
                $("#login").attr("disabled", "disabled");
        });
    });

    $("#deploy").click(function() {
        $("#deploy").attr("disabled", "disabled");
        $("#msg").text("Deploying...");
        GameContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"getdice","outputs":[{"name":"diceNumber","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStart","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"shack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isInit","outputs":[{"name":"res","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMsg","outputs":[{"name":"res","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bet","type":"uint256"}],"name":"newGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAmount","outputs":[{"name":"res","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getResult","outputs":[{"name":"Result","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNumber","outputs":[{"name":"res","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
        Game = GameContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x608060405234801561001057600080fd5b5060008090505b600681101561004357600060018260068110151561003157fe5b01819055508080600101915050610017565b5060006007819055506112a48061005b6000396000f3fe6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303ccd401146100a95780638a55d36e14610115578063a0aed04714610144578063b145a5b81461017f578063b5fdeb23146101ae578063cde9ef781461023e578063d321fe2914610279578063de292789146102a4578063e1c7392a146102cf578063f2c9ecd8146102e6575b600080fd5b3480156100b557600080fd5b506100be610311565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101015780820151818401526020810190506100e6565b505050509050019250505060405180910390f35b34801561012157600080fd5b5061012a610393565b604051808215151515815260200191505060405180910390f35b34801561015057600080fd5b5061017d6004803603602081101561016757600080fd5b81019080803590602001909291905050506103e9565b005b34801561018b57600080fd5b50610194610658565b604051808215151515815260200191505060405180910390f35b3480156101ba57600080fd5b506101c36106ae565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102035780820151818401526020810190506101e8565b50505050905090810190601f1680156102305780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561024a57600080fd5b506102776004803603602081101561026157600080fd5b810190808035906020019092919050505061078f565b005b34801561028557600080fd5b5061028e610c97565b6040518082815260200191505060405180910390f35b3480156102b057600080fd5b506102b9610ce0565b6040518082815260200191505060405180910390f35b3480156102db57600080fd5b506102e4610cea565b005b3480156102f257600080fd5b506102fb610ef1565b6040518082815260200191505060405180910390f35b606060066040519080825280602002602001820160405280156103435781602001602082028038833980820191505090505b50905060008090505b600681101561038f5760018160068110151561036457fe5b0154828281518110151561037457fe5b9060200190602002018181525050808060010191505061034c565b5090565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16905090565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff16151561044357610655565b600081101580610454575060068111155b1561045e576104ee565b6040805190810160405280600f81526020017f496e76616c6964204e756d6265722e00000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190805190602001906104e89291906111d3565b50610655565b6104f781610f3a565b60008090505b60068110156105e357600060064233600754604051602001808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052805190602001206001900481151561057c57fe5b069050600760008154809291906001019190505550600181016001836006811015156105a457fe5b018190555060036001836006811015156105ba57fe5b015411156105d5576008600081548092919060010191905055505b5080806001019150506104fd565b506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600854141561064457610637610f83565b61063f6110a3565b610655565b61064c611146565b6106546110a3565b5b50565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff16905090565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107855780601f1061075a57610100808354040283529160200191610785565b820191906000526020600020905b81548152906001019060200180831161076857829003601f168201915b5050505050905090565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff161515610874576040805190810160405280601681526020017f596f7520617265206e6f74207265616479207965742e000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401908051906020019061086e9291906111d3565b50610c94565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160009054906101000a900460ff1615610958576040805190810160405280601881526020017f596f752061726520616c726561647920696e2067616d652e00000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190805190602001906109529291906111d3565b50610c94565b60648110156109f1576040805190810160405280600d81526020017f4174206c656173742031303021000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190805190602001906109eb9291906111d3565b50610c94565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154811115610aca576040805190810160405280601e81526020017f596f7520646f206e6f74206861766520736f206d756368206d6f6e65792e00008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019080519060200190610ac49291906111d3565b50610c94565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540392505081905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506040805190810160405280600b81526020017f47616d65205374617274210000000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019080519060200190610c8a9291906111d3565b5060006008819055505b50565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154905090565b6000600854905090565b600015156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160019054906101000a900460ff1615151415610eef5760016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160016101000a81548160ff0219169083151502179055506127106000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff02191690831515021790555060206040519081016040528060008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004019080519060200190610ea69291906111d3565b5060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055505b565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154905090565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825401925050819055506040805190810160405280600881526020017f596f752077696e2e0000000000000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190805190602001906110a09291906111d3565b50565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018190555060008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160006101000a81548160ff021916908315150217905550565b6040805190810160405280600981526020017f596f75206c6f73652e00000000000000000000000000000000000000000000008152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040190805190602001906111d09291906111d3565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061121457805160ff1916838001178555611242565b82800160010185558215611242579182015b82811115611241578251825591602001919060010190611226565b5b50905061124f9190611253565b5090565b61127591905b80821115611271576000816000905550600101611259565b5090565b9056fea165627a7a723058205ba3cbdcd43721126d5b020e38e61d2d6c9bdde7fb5b844891a96f320ce28eaa0029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
         $("#amount").text(Game.getAmount());
         $("#msg").text("Deloyment done.");
         $("#init").removeAttr("disabled");
    }
 });
    });

    $("#init").click(function() {
        $(".button").attr("disabled", "disabled");
        $("#msg").text("Initting...");
        Game.init.sendTransaction({from: account, gas: '1211111'}, function (e, contract) {
                    $("#msg").text("Done initialization.");
                    $("#amount").text(Game.getAmount());
                       $(".mbutton").removeAttr("disabled");
                       $("#deploy").attr("disabled", "disabled");
        });
    });


        $("#m100").click(function() {
            $(".mbutton").attr("disabled", "disabled");
            $("#msg").text("Please start the game");
            bet = 100;
            $("#bet").text(bet);
               $("#newGame").removeAttr("disabled");
        });

        $("#m500").click(function() {
            $(".mbutton").attr("disabled", "disabled");
            $("#msg").text("Please start the game");
            bet = 500;
            $("#bet").text(bet);
             $("#newGame").removeAttr("disabled");
        });

        $("#m1000").click(function() {
            $(".mbutton").attr("disabled", "disabled");
            $("#msg").text("Please start the game");
            bet = 1000;
            $("#bet").text(bet);
               $("#newGame").removeAttr("disabled");

        });

    $("#newGame").click(function() {
        $(".button").attr("disabled", "disabled");
        $("#msg").text("starting...");
        Game.newGame.sendTransaction(bet, {from: account, gas: '1211111'}, function (e, contract) {
                    $("#amount").text(Game.getAmount());
                    $("#msg").text(Game.getMsg());
                      $(".nbutton").removeAttr("disabled");
        });
    });


    $("#n0").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 0;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n1").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 1;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n2").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 2;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n3").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 3;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n4").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 4;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n5").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 5;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#n6").click(function() {
        $(".nbutton").attr("disabled", "disabled");
        $("#msg").text("starting...");
        number = 6;
        $("#number").text(number);
          $("#shack").removeAttr("disabled");
    });

    $("#shack").click(function() {
        $(".button").attr("disabled", "disabled");
        $("#msg").text("shacking...");
        Game.shack.sendTransaction(number,{from: account, gas: '1211111'}, function (e, contract) {
                    $("#amount").text(Game.getAmount());
                    $("#msg").text(Game.getMsg());
                      $("#dice").text(Game.getdice());
                    $("#realnumber").text(Game.getResult());
                    $(".mbutton").removeAttr("disabled");
        });
    });


});
