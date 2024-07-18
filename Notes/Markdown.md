<!-- Markdown is what most readme files are based on so that you can style them in a neat way and most -->
<!-- markdown is similar to HTML but it uses a different way to handle tags -->

<!-- headers are just "#" in front of what you're typing the amount of # there are is the subsuquence number header you're using -->

# this is an h1
## this is an h2
### this is an h3
###### this is an h6 <!-- this is as small as it goes-->

This is a paragraph. To make another one you just go to the next line ideally with a break inbetween

surrounding the word with double astrisks will make it **bold** surounding the word with single astrisks will make it *Italic*

how to make a codebox <!-- the code in this box is not accurate its was just auto generated just to plug in for an example-->

here how to make a bulleted list

* item 1
* item 2
* item 3

you can make a numbered list if you do the same thing with numbers <!-- you don't have to use sequencial numbers to have it render correctly -->

1. item 1
1. item 2
1. item 3

Here's how to make a check list <!-- this seems to only work when just previewing it maybe? look into this later>

- [x] item 1
- [ ] item 2

you can draw out your table as well

|column 1|Column 2|
|--------|--------|
|really long item| meowthington the third|

'''

    function calculate({ num1, operator, num2 }) {
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operator';
        }
        return result;
    }

    runCalculator();

'''

This is a link here [Google](https://udm14.com/) <!-- surround the word you want hyperlinked with brackets and then in parenthesis right next to it with the link inside-->

Here's how to do a an image

![alt text](https://www.lib.uchicago.edu/efts/ARTFL/projects/mckee/Images/gavarni-reduced2.jpg)