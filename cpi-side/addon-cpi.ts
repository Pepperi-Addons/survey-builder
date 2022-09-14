import '@pepperi-addons/cpi-node'
import SurveysService from './surveys-cpi.service';
export const router = Router();

export async function load(configuration: any) {
    // console.log('cpi side works!');
    // Put your cpi side code here

    pepperi.events.intercept('OnSurveyLoad' as any, {}, async (data): Promise<void> => {
        // Handle on survey load
        const surveyKey = data.surveyKey;
        let survey = {};

        if (surveyKey) {
            const service = new SurveysService();
            survey = await service.getSurveyData(surveyKey);
        }
        
        // Test alert
        data.client?.alert('survey load', `${JSON.stringify(survey)}`);
        
        return survey as any;
    });

    pepperi.events.intercept('OnSurveyFieldChange' as any, {}, async (data): Promise<void> => {
        // Handle on survey field change
        const survey = {};

        // Test alert
        data.client?.alert('survey field change', `${JSON.stringify(survey)}`);
        
        return survey as any;
    });
}


router.get('/get_survey_data', async (req, res, next) => {
    let result = {};

    try {
        const surveyKey = req.query['survey_key']?.toString();
        if (surveyKey) {
            const service = new SurveysService();
            result = await service.getSurveyData(surveyKey);
        }
    } catch (err) {
        console.log(err);
        next(err)
    }

    res.json(result);
});

router.get('/get_survey', async (req, res) => {
    let resObj = {}
    
    
    res.json(resObj);
});

router.post('/update_survey', async (req, res) => {
    // debugger;
    let resObj = {}
    
    res.json(resObj);

});