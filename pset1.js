/*
    @func getSuperHero
    @param {string} name
    @param {string} alterEgoName
    @param {boolean} isVillain
    @param {number} age
    @returns {object}
    @desc - takes in the params and returns an object
            that describes superhero
    @example - 
        getSuperHero('Batman', 'Bruce Wayne', false, 31);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
*/

const getSuperHero = (name, alterEgoName, isVillain, age) => {
    return {
        name,
        alterEgoName,
        isVillain,
        age
    };
}
//test
console.log('------------------- 1. getSuperHero test -------------------');
console.log(getSuperHero('Batman','Bruce Wayne',false,31));
console.log('---------------------------------------------');

/*
    @func updateSuperHero
    @param {object} superHero
    @param {string} keyName
    @param {anything} keyValue
    returns {object}
    @desc - takes an existing superhero object
            and adds a new property to it
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'likesBats', true);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            likesBats: true
        }
*/
const batman = getSuperHero('Batman','Bruce Wayne',false,31);

const updateSuperHero = (superHero, keyName, keyValue) =>{
    superHero[keyName] = keyValue;
    return superHero;
}

//test
console.log('------------------- 2. updateSuperHero test -------------------');
console.log(updateSuperHero(batman,'likesBats',true));
console.log('---------------------------------------------');

/*
    @func updateSuperHeroAction
    @param {object} superHero
    @param {string} actionName
    @param {function} actionFunc 
    @returns {object}
    @desc - takes an existing superhero object
            and adds a new FUNCTION property to it 
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, 'saySomething', function saySomething() {
            return "I'm Batman";
        });
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            }
        }   
*/

const updateSuperHeroAction = (superHero, actionName, actionFunc) =>{
    superHero[actionName] = actionFunc;
    return superHero;
}

//test
console.log('------------------- 3. updateSuperHeroAction test -------------------');
console.log(updateSuperHeroAction(batman,'saySomething', function saySomething() {return "I'm Batman";} ));
console.log('---------------------------------------------');

/*
    @func updateSuperHeroInBulk
    @param {object} superHero
    @param {array} properties
    @returns {object}
    @desc - takes an ARRAY of properties and values
            and applies them to the superhero object
            
    @example - 
        const batman = {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31
        }
        updateSuperHero(batman, [
            'saySomething', 
            function saySomething() {
                return "I'm Batman";
            },
            'likesBats',
            true,
            'isRich',
            true
        ]);
        {
            name: 'Batman',
            alterEgoName: 'Bruce Wayne',
            isVillain: false,
            age: 31,
            saySomething: function saySomething() {
                return "I'm Batman";
            },
            likesBats: true,
            isRich: true
        }     
*/
const updateSuperHeroInBulk = (superHero, properties) => {
    properties.forEach( (cI,i) =>{
        const nextItem = properties[i+1];
        if (i %2 === 0) {superHero[cI] = nextItem;}
    } );
    return superHero;
}
//test
console.log('------------------- 4. updateSuperHeroInBulk test -------------------');
console.log(updateSuperHeroInBulk(batman,['saySomething',function saySomething(){return "I'm Batman";},'likesBats',true,
'isRich',true]));
console.log('---------------------------------------------');
