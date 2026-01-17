import { useState } from "react";

interface StoryEvent {
  title: string;
  description: string;
  choices: {
    text: string;
    effects: {
      wealth: number;
      mentalHealth: number;
      physicalHealth: number;
      babyHealth: number;
    };
  }[];
  knowledge: string;
}

interface StoryViewProps {
  json: string;
  onChoice: (choiceText: string) => void;
}

export function StoryView({ json, onChoice }: StoryViewProps) {

  let event: StoryEvent | null = null;
  try {
    // Try to parse JSON. Sometimes LLMs include markdown ```json ... ```
    const cleanJson = json.replace(/```json/g, "").replace(/```/g, "").trim();
    event = JSON.parse(cleanJson);
  } catch (e) {
    // If it's not valid JSON yet, we might be streaming or it's just text.
    return null;
  }

  if (!event || !event.title) return null;

  return (
    <div className="max-w-2xl w-full bg-white text-black p-8 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      <p className="mb-6 text-gray-700 leading-relaxed">{event.description}</p>
      
      <div className="grid gap-4 mb-6">
        {event.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => onChoice(choice.text)}
            className="p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
          >
            <div className="font-semibold mb-1 group-hover:text-blue-700">{choice.text}</div>
            <div className="text-xs text-gray-500 flex gap-2">
              {Object.entries(choice.effects).map(([key, val]) => (
                <span key={key} className={val > 0 ? "text-green-600" : val < 0 ? "text-red-600" : "text-gray-400"}>
                  {key}: {val > 0 ? "+" : ""}{val}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {event.knowledge && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm text-yellow-800">
          <strong>💡 Knowledge:</strong> {event.knowledge}
        </div>
      )}
    </div>
  );
}
