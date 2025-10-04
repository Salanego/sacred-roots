import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const applicationSchema = z.object({
  parentNames: z.string().trim().min(1, "Parent name(s) are required").max(200),
  childrenInfo: z.string().trim().min(1, "Children information is required").max(300),
  email: z.string().trim().email("Invalid email address").max(255),
  whatsapp: z.string().trim().max(50).optional(),
  preferredDates: z.string().trim().min(1, "Preferred dates are required").max(200),
  countryResidence: z.string().trim().min(1, "Country of residence is required").max(100),
  educationApproach: z.string().trim().min(1, "Please describe your education approach").max(500),
  inspiration: z.string().trim().min(1, "Please share what inspired you").max(1000),
  familyValues: z.string().trim().min(1, "Please share your family values").max(1000),
  languages: z.string().trim().min(1, "Please list languages spoken").max(200),
  childrenActivities: z.string().trim().min(1, "Please describe preferred activities").max(500),
  communityContribution: z.string().trim().max(1000).optional(),
  explorationThemes: z.string().trim().max(1000).optional(),
  specialNeeds: z.string().trim().max(1000).optional(),
  accommodations: z.string().trim().max(1000).optional(),
  familyHopes: z.string().trim().min(1, "Please share your hopes").max(1000),
  additionalInfo: z.string().trim().max(1000).optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const Apply = () => {
  const { toast } = useToast();
  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      parentNames: "",
      childrenInfo: "",
      email: "",
      whatsapp: "",
      preferredDates: "",
      countryResidence: "",
      educationApproach: "",
      inspiration: "",
      familyValues: "",
      languages: "",
      childrenActivities: "",
      communityContribution: "",
      explorationThemes: "",
      specialNeeds: "",
      accommodations: "",
      familyHopes: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: ApplicationFormData) => {
    const message = `
🌟 *New Application from Sacred Roots Worldschool*

📋 *Family Information*
Parents/Guardians: ${data.parentNames}
Children: ${data.childrenInfo}
Email: ${data.email}
${data.whatsapp ? `WhatsApp: ${data.whatsapp}` : ''}
Preferred Dates: ${data.preferredDates}
Country/Nationality: ${data.countryResidence}

🎓 *Education & Learning*
Current Approach: ${data.educationApproach}
Inspiration: ${data.inspiration}
Family Values: ${data.familyValues}
Languages: ${data.languages}

🎨 *Interests & Contribution*
Children's Activities: ${data.childrenActivities}
${data.communityContribution ? `How to Contribute: ${data.communityContribution}` : ''}
${data.explorationThemes ? `Themes to Explore: ${data.explorationThemes}` : ''}

💚 *Support & Needs*
${data.specialNeeds ? `Special Needs: ${data.specialNeeds}` : ''}
${data.accommodations ? `Accommodations Needed: ${data.accommodations}` : ''}

✨ *Hopes & Goals*
${data.familyHopes}

${data.additionalInfo ? `📝 Additional Information:\n${data.additionalInfo}` : ''}
    `.trim();

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Application prepared!",
      description: "Your WhatsApp will open with the message ready to send.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-soft-sand/10">
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Join Sacred Roots
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your family's journey with us. This application helps us understand your hopes, needs, and how we can create the best experience together.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Family Information */}
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Family Information</h2>
              
              <FormField
                control={form.control}
                name="parentNames"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent(s) or Guardian(s) Full Name(s)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name(s)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="childrenInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number and Age of Children</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2 children - ages 7 and 9" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="+1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredDates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Dates of Stay or Participation</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. January 2026, flexible" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="countryResidence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country of Residence / Nationality</FormLabel>
                    <FormControl>
                      <Input placeholder="Your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Education & Learning */}
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Education & Learning</h2>

              <FormField
                control={form.control}
                name="educationApproach"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What type of education or learning approach do your children currently follow?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g. homeschooling, worldschooling, unschooling, traditional school, etc."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inspiration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What inspired you to join a worldschool community?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your story..."
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="familyValues"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your family's main values or priorities in education and life?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What matters most to your family..."
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What languages do you and your children speak?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. English, Spanish, Portuguese" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Interests & Contribution */}
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Interests & Contribution</h2>

              <FormField
                control={form.control}
                name="childrenActivities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What activities are your children most drawn to?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g. art, music, movement, nature, science, building, storytelling..."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="communityContribution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How would you like to contribute to the community? (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g. sharing a skill, leading a workshop, helping with projects, cooking, etc."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="explorationThemes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are there any particular themes or projects your family would like to explore here? (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share any interests or projects..."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Support & Needs */}
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Support & Needs</h2>

              <FormField
                control={form.control}
                name="specialNeeds"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do your children have any special needs, allergies, or sensitivities we should know about? (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any information that would help us support your children better..."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accommodations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Are there any accommodations or support your family might require? (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Let us know how we can best support your family..."
                        className="min-h-20"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Hopes & Goals */}
            <div className="bg-card p-6 rounded-lg shadow-sm space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hopes & Goals</h2>

              <FormField
                control={form.control}
                name="familyHopes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you hope your family will gain from this experience?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Share your dreams and hopes for this journey..."
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Is there anything else you'd like us to know? (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any other thoughts or information..."
                        className="min-h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                size="lg"
                className="warm-gradient text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-warm hover:scale-105 transition-smooth"
              >
                Send Application via WhatsApp
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Apply;
