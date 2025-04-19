import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";



export const useUpdateStore = create((set, get) => ({
    stories: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isStoriesLoading: false,
    isSendingStory: false,
    

    getPosts: async (userId) => {
        set({ isMessagesLoading: true });
        try {
          const res = await axiosInstance.get(`/posts/${userId}`);
          set({ messages: res.data });
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isMessagesLoading: false });
        }
    },

    getStories: async () => {
        set({ isStoriesLoading: true });
        try {
          const res = await axiosInstance.get("/stories/get-user-stories");
          set({ users: res.data });
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isStoriesLoading: false });
        }
      },
    

    

      sendStory: async (data) => {
        set({ isSendingStory: true });
        try {
          const res = await axiosInstance.post("/stories/send-story", data);
          set({ authUser: res.data });
          toast.success("Story updated successfully");
        } catch (error) {
          console.log("error in update story:", error);
          toast.error(error.response.data.message);
        } finally {
          set({ isSendingStory: false });
        }
      },
    
    
    getEvents: async (userId) => {
        set({ isMessagesLoading: true });
        try {
          const res = await axiosInstance.get(`/events/${userId}`);
          set({ messages: res.data });
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          set({ isMessagesLoading: false });
        }
    },
    
    
    
    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));