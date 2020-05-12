export const json1 = {
    "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great product!</h5>",
    "completedHtmlOnCondition": [
        {
            "expression": "{nps_score} > 8",
            "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
        }, {
            "expression": "{nps_score} < 7",
            "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5>\n"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "rating",
                    "name": "nps_score",
                    "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(Most unlikely)",
                    "maxRateDescription": "(Most likely)"
                }, {
                    "type": "checkbox",
                    "name": "promoter_features",
                    "visibleIf": "{nps_score} >= 9",
                    "title": "What features do you value the most?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "answercount",
                            "text": "Please select two features maximum.",
                            "maxCount": 2
                        }
                    ],
                    "hasOther": true,
                    "choices": [
                        "Performance", "Stability", "User Interface", "Complete Functionality"
                    ],
                    "otherText": "Other feature:",
                    "colCount": 2
                }, {
                    "type": "comment",
                    "name": "passive_experience",
                    "visibleIf": "{nps_score} > 6  and {nps_score} < 9",
                    "title": "What is the primary reason for your score?"
                }, {
                    "type": "comment",
                    "name": "disappointed_experience",
                    "visibleIf": "{nps_score} notempty",
                    "title": "What do you miss and what was disappointing in your experience with us?"
                }
            ]
        }
    ],
    "showQuestionNumbers": "off"
};


export const json2 = { "pages": [{ "name": "page1", "elements": [{ "name": "question1", "type": "radiogroup", "title": "Fav Actress?", "choices": [{ "text": "Ana", "value": "item1" }, { "text": "Scarlet", "value": "item2" }, { "text": "Jennifer", "value": "item3" }] }] }] }

export const json3 = { "pages": [{ "name": "page1", "elements": [{ "name": "question1", "type": "radiogroup", "title": "Fav movie?", "choices": [{ "text": "Parasite", "value": "1" }, { "text": "Charlie's Angles", "value": "2" }, { "text": "Jojo Rabit", "value": "3" }] }, { "name": "question2", "type": "radiogroup", "title": "Fav Director?", "choices": [{ "text": "David Finch", "value": "1" }, { "text": "Ridle Scott", "value": "2" }, { "text": "Christopher Nolan", "value": "3" }] }, { "name": "question3", "type": "radiogroup", "title": "Fav Music Director?", "choices": [{ "text": "Ar Rahman", "value": "1" }, { "text": "Hans Zimmer", "value": "2" }, { "text": "Gopi Sunder", "value": "3" }] }] }] }