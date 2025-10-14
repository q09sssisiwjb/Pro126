import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check, Code2, Globe, Sparkles } from "lucide-react";

export default function API() {
  const { toast } = useToast();
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const domain = window.location.origin;

  const embedCodes = {
    textToImage: {
      title: "Text-to-Image Generator",
      description: "Embed our AI-powered image generator on your website",
      code: `<iframe 
  src="${domain}/text-to-image" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    imageToImage: {
      title: "Image-to-Image Transformer",
      description: "Transform images with AI on your site",
      code: `<iframe 
  src="${domain}/image-to-image" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    bgRemover: {
      title: "Background Remover",
      description: "Add background removal tool to your website",
      code: `<iframe 
  src="${domain}/bg-remover" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    upscale: {
      title: "Image Upscaler",
      description: "Enhance image quality with AI upscaling",
      code: `<iframe 
  src="${domain}/upscale" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    imageToSketch: {
      title: "Image-to-Sketch Converter",
      description: "Convert photos to sketches on your website",
      code: `<iframe 
  src="${domain}/image-to-sketch" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    canvasEditor: {
      title: "Canvas Editor",
      description: "Embed our advanced canvas editing tool",
      code: `<iframe 
  src="${domain}/canvas-editor" 
  width="100%" 
  height="800" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
    fullWidget: {
      title: "Complete CreatiVista AI Widget",
      description: "Embed the complete AI toolkit with all features",
      code: `<iframe 
  src="${domain}/" 
  width="100%" 
  height="900" 
  frameborder="0" 
  allowfullscreen
  style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
></iframe>`,
    },
  };

  const copyToClipboard = async (code: string, key: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStates({ ...copiedStates, [key]: true });
      toast({
        title: "Copied!",
        description: "Embed code copied to clipboard",
      });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [key]: false });
      }, 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-12 h-12 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-testid="text-api-title">
              CreatiVista AI API
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-api-description">
            Integrate our powerful AI image generation and manipulation tools into your website. 
            Free for commercial use - no API key required!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <Globe className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Easy Integration</CardTitle>
              <CardDescription>Simple iframe embed codes ready to use</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-pink-200 dark:border-pink-800">
            <CardHeader>
              <Sparkles className="w-8 h-8 text-pink-600 mb-2" />
              <CardTitle>Commercial Use Allowed</CardTitle>
              <CardDescription>Use our tools on any commercial website</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-200 dark:border-purple-800">
            <CardHeader>
              <Code2 className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>No API Key Needed</CardTitle>
              <CardDescription>Just copy and paste the embed code</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Embed Codes Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Embed Codes</CardTitle>
            <CardDescription>
              Choose any of our AI tools to embed on your website. All tools are optimized for seamless integration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="textToImage" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
                <TabsTrigger value="textToImage" data-testid="tab-text-to-image">Text-to-Image</TabsTrigger>
                <TabsTrigger value="imageToImage" data-testid="tab-image-to-image">Transform</TabsTrigger>
                <TabsTrigger value="bgRemover" data-testid="tab-bg-remover">BG Remover</TabsTrigger>
                <TabsTrigger value="upscale" data-testid="tab-upscale">Upscale</TabsTrigger>
                <TabsTrigger value="imageToSketch" data-testid="tab-image-to-sketch">Sketch</TabsTrigger>
                <TabsTrigger value="canvasEditor" data-testid="tab-canvas-editor">Canvas</TabsTrigger>
                <TabsTrigger value="fullWidget" data-testid="tab-full-widget" className="lg:col-span-2">Full Widget</TabsTrigger>
              </TabsList>

              {Object.entries(embedCodes).map(([key, { title, description, code }]) => (
                <TabsContent key={key} value={key} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-embed-title-${key}`}>{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4" data-testid={`text-embed-desc-${key}`}>{description}</p>
                  </div>

                  <div className="relative">
                    <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm" data-testid={`code-embed-${key}`}>
                      <code>{code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(code, key)}
                      data-testid={`button-copy-${key}`}
                    >
                      {copiedStates[key] ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy Code
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Usage Tips:</h4>
                    <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-400 space-y-1">
                      <li>Adjust the width and height to fit your layout</li>
                      <li>The iframe is responsive and works on mobile devices</li>
                      <li>You can customize the border-radius and shadow styling</li>
                      <li>No attribution required, but always appreciated!</li>
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Terms Section */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">✓ Commercial Use Allowed</CardTitle>
            <CardDescription>
              You are free to use these embed codes on any website, including commercial projects. 
              Our tools are provided as-is for integration purposes. Please ensure your use complies 
              with our Terms & Conditions and Privacy Policy.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Support Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Need help with integration or have questions?
          </p>
          <Button asChild variant="outline" data-testid="button-contact-support">
            <a href="/contact-us">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
