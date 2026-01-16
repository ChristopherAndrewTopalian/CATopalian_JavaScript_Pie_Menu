// makeInterface.js

function makeInterface()
{
    ba(makeTitleOfApp());

    //-//

    // buttonContainer
    let buttonContainer = ce('div');
    buttonContainer.id = 'buttonContainer';
    buttonContainer.className = 'buttonContainer';
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = '100px';
    buttonContainer.style.top = '50px';
    ba(buttonContainer);

    //-//

    // buttonDivCircle
    let buttonDivCircle = ce('button');
    buttonDivCircle.id = 'buttonDivCircle';
    buttonDivCircle.className = 'buttonDivCircle';
    buttonDivCircle.innerHTML = 'O';

    //-//

    // onclick
    buttonDivCircle.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);

        if (ge('circleContainer'))
        {
            ge('circleContainer').remove();
        }
        else
        {
            createCircleOfDivs(logicGates);
        }
    };
    buttonContainer.append(buttonDivCircle);
}

function createCircleOfDivs(whichArray)
{
    // circleContainer
    let circleContainer = ce('div');
    circleContainer.id = 'circleContainer';
    ba(circleContainer);

    //-//

    // infoDiv
    let infoDiv = ce('div');
    infoDiv.id = 'infoDiv';
    infoDiv.className = 'infoDiv';
    infoDiv.style.position = 'absolute';
    infoDiv.style.left = ge('buttonContainer').getBoundingClientRect().x + 425 + 'px';
    infoDiv.style.top = ge('buttonContainer').getBoundingClientRect().y + 70 + 'px';
    circleContainer.append(infoDiv);

    let radius = 100;

    let centerX = ge('buttonContainer').getBoundingClientRect().x + 200;

    let centerY = ge('buttonContainer').getBoundingClientRect().y + 100;

    //-//

    for (let i = 0; i < whichArray.length; i++)
    {
        let angle = (Math.PI * 2) / whichArray.length * i - Math.PI / 2;

        let x = centerX + radius * Math.cos(angle);

        let y = centerY + radius * Math.sin(angle);

        //-//

        // square
        let square = ce('div');
        square.innerHTML = whichArray[i].name;
        square.id = 'square' + i;
        square.className = 'square';
        square.style.left = x + 'px';
        square.style.top = y + 'px';

        // onclick
        square.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);

            ge('infoDiv').innerHTML = whichArray[i].name;

            ge('square' + i).style.color = 'rgb(255, 0, 255)';

            if (whichArray[i].name == 'Gate 1')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 2')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 3')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 4')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 5')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 6')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 7')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }

            if (whichArray[i].name == 'Gate 8')
            {
                ge('infoDiv').innerHTML = logicGates[i].name + '<br>' + logicGates[i].details;
            }
        };

        // onmouseover
        square.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);

            square.style.borderColor = 'rgb(0, 255, 255)';
            square.style.color = 'rgb(0, 255, 255)';
        };

        // onmouseout
        square.onmouseout = function()
        {
            square.style.borderColor = 'rgb(255, 255, 255)';
            square.style.color = 'rgb(255, 255, 255)';
        };
        circleContainer.append(square);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

