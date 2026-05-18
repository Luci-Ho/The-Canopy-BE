import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface IChatSession extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  messages: IMessage[];
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    role: { type: String, enum: ['user', 'model'], required: true },
    text: { type: String, required: true, maxlength: 8000 },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

const ChatSessionSchema = new Schema<IChatSession>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, default: 'Phiên trò chuyện', maxlength: 120 },
    messages: { type: [MessageSchema], default: [], maxlength: 50 },
  },
  { timestamps: true }
);

// Index for listing sessions by user, sorted by newest
ChatSessionSchema.index({ userId: 1, updatedAt: -1 });

export const ChatSessionModel = mongoose.model<IChatSession>('ChatSession', ChatSessionSchema);