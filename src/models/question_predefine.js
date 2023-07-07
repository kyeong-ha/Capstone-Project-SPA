import { DataStore } from "aws-amplify";
// import amplifyConfig from "./aws-exports";

const questions = [
    `At a party, would you rather spend most of the time talking to a few close friends or mingle with many different people?`,
    `When deciding on a restaurant for dinner with friends, do you primarily consider the quality and taste of the food (logic) or whether everyone will feel comfortable and enjoy the atmosphere (emotions)?`,
    `When planning a trip, do you focus on researching specific attractions and activities, like visiting historical landmarks, or do you look for overarching themes, like exploring local art and culture?`,
    `Imagine you have a week-long project due next week. Would you create a detailed plan, breaking down the tasks day by day, or prefer to go with the flow and work on it when inspiration strikes?`,
    `In a cooking class, would you rather learn through hands-on demonstrations, like preparing dishes yourself, or listening to explanations of different techniques and the science behind them?`,
    `During a team-building activity, such as a group puzzle-solving game, do you take charge by assigning roles and directing the group or contribute your ideas and insights in a more collaborative manner?`,
    `A friend comes to you with a personal dilemma. Do you offer a solution based on logical analysis, weighing the pros and cons, or do you focus on understanding and validating their feelings and concerns?`,
    `You're in a disagreement with a colleague. Do you prioritize resolving the conflict by finding a compromise, even if it means not fully expressing your point of view, or do you assert your opinion even if it risks causing tension?`,
    `On a weekend getaway, would you rather follow a detailed itinerary that includes a list of attractions, restaurants, and activities, or leave your schedule open to spontaneous adventures and discoveries?`,
    `In your free time, are you more drawn to learning practical skills, like woodworking or gardening, or exploring abstract concepts and ideas, like philosophy or advanced mathematics?`
];

// Amplify.configure(amplifyConfig);

// function* question_init() {
    // for(let i=1; i<=10; i++){
            const input = await DataStore.save(
                new Input({
                    id: '1',
                    question: questions[0],
                    answer: ''
                })
            );
// };

// const init = question_initialized
export default input;
