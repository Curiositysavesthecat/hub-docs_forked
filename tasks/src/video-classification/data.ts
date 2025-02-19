import type { TaskDataCustom } from "../Types";

const taskData: TaskDataCustom = {
    datasets: [
        {
            // TODO write proper description
            description: "Benchmark dataset used for video classification with videos that belong to 400 classes.",
            id: "kinetics400",
        },
    ],
    demo: {
		inputs: [
			{
				filename: "video-classification-input.gif",
				type:     "img",
			},
		],
		outputs: [
			{
				type: "chart",
				data: [
					{
						label: "Playing Guitar",
						score: 0.514,
					},
					{
						label: "Playing Tennis",
						score: 0.193,
					},
					{
						label: "Cooking",
						score: 0.068,
					},
				],
			},
		],
	},
    metrics: [
        {
            description: "",
            id: "accuracy",
        },
        {
            description: "",
            id: "recall",
        },
        {
            description: "",
            id: "precision",
        },
        {
            description: "",
            id: "f1",
        },

    ],
    models: [
        {
            // TO DO: write description
            description: "Strong Video Classification model trained on the Kinects 400 dataset.",
            id: "MCG-NJU/videomae-base-finetuned-kinetics",
        },
        {
            // TO DO: write description
            description: "Strong Video Classification model trained on the Kinects 400 dataset.",
            id: "microsoft/xclip-base-patch32",
        },
    ],
    summary: "Video classification is the task of assigning a label or class to an entire video. Videos are expected to have only one class for each video. Video classification models take a video as input and return a prediction about which class the video belongs to.",
    widgetModels: ["MCG-NJU/videomae-base-finetuned-kinetics"],
    youtubeId: "",
};

export default taskData;
